using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Configurations.UserConfig
{
    internal class RolesConfig : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            var UserRoleId = "8635bf54-7254-4771-9381-896945933949";
            var AdminRoleId = "ccacd619-9c86-4a7b-a9c8-8cc6f4899ad1";

            var Roles = new List<IdentityRole>
            {
                new IdentityRole()
                {
                    Id = UserRoleId,
                    Name = "userRole",
                    NormalizedName = "userRole".ToUpper(),
                    ConcurrencyStamp = UserRoleId
                },
                new IdentityRole() {
                       Id = AdminRoleId,
                    Name = "adminRole",
                    NormalizedName = "adminRole".ToUpper(),
                    ConcurrencyStamp = AdminRoleId
                }

            };
            builder.HasData(Roles);
        }
    }
}
