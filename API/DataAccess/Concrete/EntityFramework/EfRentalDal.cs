using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfRentalDal : EfEntityRepositoryBase<Rental, Context>, IRentalDal
    {
        public List<RentalDetailDto> GetRentalDetailDto()
        {
            using (Context context = new Context())
            {
                var result = from c in context.Caravans
                             join r in context.Rentals
                             on c.Id equals r.CaravanId
                             select new RentalDetailDto
                             {
                                 Id = r.Id,
                                 CaravanId = c.Id,
                                 RentDate = r.RentDate,
                                 ReturnDate = r.ReturnDate,
                                 UserId = r.UserId,
                             };
                return result.ToList();
            }
        }
    }
}
