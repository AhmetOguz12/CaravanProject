using Azure;
using Business.Abstract;
using DataAccess.Concrete.EntityFramework;
using Entities.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        Context _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IUserService _userService;
        private readonly ITokenService _tokenService;
        public UsersController(IUserService userService, UserManager<IdentityUser> userManager, ITokenService tokenService, Context dbContext)
        {
            _userService = userService;
            _userManager = userManager;
            _tokenService = tokenService;
            _context = dbContext;
        }

        [HttpPost("signUp")]
        public async Task<ActionResult> SignUp(UserSignUpDto request)
        {
            if (request == null)
            {
                return BadRequest("Invalid Request");
            }
            var user = new IdentityUser
            {
                UserName = request.UserName,
                Email = request.Email,
            };
            var existingUserMailResult = await _userManager.FindByEmailAsync(request.Email);
            if (existingUserMailResult != null)
            {
                ModelState.AddModelError("hata", "Mail Zaten Kullanılıyor");
                return ValidationProblem(ModelState);
            }
            var existingUserNameResult = await _userManager.FindByNameAsync(request.UserName);

            if (existingUserNameResult != null)
            {
                ModelState.AddModelError("hata", "Kullanıcı adı zaten kullanılıyor");
                return ValidationProblem(ModelState);
            }

            var result = await _userService.SignUp(user, request.Password);

            if (!result.Success)
            {

                return BadRequest("Parola en az 5 karakter içermelidir");
            }
            var roleResult = await _userManager.AddToRoleAsync(user, "userRole");
            if (roleResult == null)
            {
                // Log the errors during role assignment


                return BadRequest("Rol atanamadı");
            }
            return Ok(request);
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLoginDto request)
        {
            var result = await _userService.Login(request.Email, request.Password, request.UserName);
            if (!result.Success)
            {
                return BadRequest("Kullanıcı Bulunamadı");
            }

            var user = result.Data;
            var roles = (await _userManager.GetRolesAsync(user)).ToList();

            var tokenResult = await _tokenService.CreateJwtTokenAsync(user, roles);
            if (tokenResult.Success)
            {
                var token = tokenResult.Data;
                var response = new UserLoginResponeDto
                {
                    Token = token
                };
                return Ok(response);
            }

            return BadRequest("Token Oluşturulamadı");

        }
    }
}
