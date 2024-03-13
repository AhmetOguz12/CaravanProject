using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Concrete.EntityFramework;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        Context _context;
        private readonly UserManager<IdentityUser> _userManager;

        public UserManager(UserManager<IdentityUser> userManager, Context context)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<IDataResult<IdentityUser>> Login(string email, string password, string username)
        {
            IdentityUser user= null;

            //burada giriş için kullanıcının mail veya username girilmesş yeterli 
            if (!string.IsNullOrEmpty(email))
            {
                user = await _userManager.FindByEmailAsync(email);
            }
            if (user == null && !string.IsNullOrEmpty(username)){
                user = await _userManager.FindByNameAsync(username);
            }
            if (user!=null && await _userManager.CheckPasswordAsync(user,password)  )
            {
                return new SuccessDataResult<IdentityUser>(user, "Giriş Başarılı");
            }
            return new ErrorDataResult<IdentityUser>(null, "Kullanıcı veya parola hatalı");
        }

        public async Task<IResult> SignUp(IdentityUser user, string password)
        {
            var result = await _userManager.CreateAsync(user, password);

            return result.Succeeded
                ? new SuccessResult("Kullanıcı Eklendi")
            : new ErrorResult(string.Join(", ", "Kllanıcı oluşm ada hata var"));
        }
    }
}
