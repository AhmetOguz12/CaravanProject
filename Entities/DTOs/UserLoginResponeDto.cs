using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class UserLoginResponeDto
    {
        //kullanııc sisteme giriş yaptıktan sonra sistem giriş yaptıktan sonra örnke veriyorum bu kullanıcı nmeye sahipo hangi kiralamaları yapmış diye bakabiliriz
        //public string UserId { get; set; }
        //public string UserName { get; set; }
        //public string Email { get; set; }
        //public List<string> Roles { get; set; }

        public string Token { get; set; }

    }
}
