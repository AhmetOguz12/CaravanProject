using Core.Utilities.Results;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserService
    {
        Task<IResult> SignUp(IdentityUser user, string password);
        Task<IDataResult<IdentityUser>> Login(string email, string password, string username);
    }
}
