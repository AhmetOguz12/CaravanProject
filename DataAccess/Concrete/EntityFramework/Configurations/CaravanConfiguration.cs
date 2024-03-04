using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Configurations
{
    public class CaravanConfiguration : IEntityTypeConfiguration<Caravan>
    {
        public void Configure(EntityTypeBuilder<Caravan> builder)
        {
            builder.Property(x => x.Name).HasMaxLength(20);

            Caravan caravan1 = new()
            {
                Id = 1,
                BrandId = 1,
                ColorId = 1,
                Name = "Sıfır Caravan",
                DailyPrice = 2500000,
                Description = "Hiç Kullanılmadı Sıfır Gibi",
                ModelYear = 2002,
            };
            builder.HasData(caravan1);
        }
    }
}
