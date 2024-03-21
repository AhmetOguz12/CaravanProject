using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class UserUpdateDto
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        //kullanıcı parolarısnı güncellemek için aktif parolasını getirmek zorundayız
        public string CurrentPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
