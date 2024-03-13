using Core.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Rental : IEntity
    {
        public int Id { get; set; }
        public int CaravanId { get; set; }

        public DateTime RentDate { get; set; }
        public DateTime ReturnDate { get; set; }


        public string UserId { get; set; } 
        public IdentityUser User { get; set; }
    }
}
