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
    internal class AdminUserConfig : IEntityTypeConfiguration<IdentityUser>
    {
        //userların içerisine bir admin tanımladık
        public void Configure(EntityTypeBuilder<IdentityUser> builder)
        {
            var AdminUserId = "3a97beb2-2b28-4537-b58c-d4ef78a80bdf";
            var AdminUser = new IdentityUser
            {
                Id = AdminUserId,
                Email = "admin@gmail.com",
                NormalizedEmail = "admin@gmail.com".ToUpper(), //i yerine ı düş normalidesemail alırken
                UserName = "admin@gmail.com",
                NormalizedUserName = "admin@gmail.com".ToUpper(),
            };
            AdminUser.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(AdminUser, "123456");
            builder.HasData(AdminUser);
        }
    }
}
