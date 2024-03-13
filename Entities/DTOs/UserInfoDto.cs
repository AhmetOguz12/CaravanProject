using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class UserInfoDto
    {
        //kullanıcı bilgileri göstermek için kullanıyoruz getuserbyıd de kullanıyoruz
        public string UserId { get; set; } 
        public string UserName { get; set; }
        public string Email { get; set; }
    }
}
