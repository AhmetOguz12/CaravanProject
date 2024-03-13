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
    internal class AdminRoleConfig : IEntityTypeConfiguration<IdentityUserRole<string>>
    {
        public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder)
        {
           builder.HasKey(ur=> new {ur.UserId,ur.RoleId});//iki tabloyu birleştirdi role tablosuydu hangi kullanıcı hangi role sahşp onu tanımladık


            var UserRoleId = "8635bf54-7254-4771-9381-896945933949";
            var AdminRoleId = "ccacd619-9c86-4a7b-a9c8-8cc6f4899ad1";
            var AdminUserId = "3a97beb2-2b28-4537-b58c-d4ef78a80bdf";

            var AdminRole = new List<IdentityUserRole<string>>
            {
                new()
                {
                    //admin kullanıcısına hem user hem admin rolu atadık 
                    UserId=AdminUserId,  
                    RoleId=AdminRoleId,
                },
                new()
                {
                    UserId = AdminUserId,
                    RoleId=UserRoleId,
                }
            };
            builder.HasData(AdminRole);
        }
    }

}
