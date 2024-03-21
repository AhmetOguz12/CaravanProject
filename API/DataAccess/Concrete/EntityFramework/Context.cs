using Entities.Concrete;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class Context :  IdentityDbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-0F5T9EM;Database=CaravanProject;Trusted_Connection=true;TrustServerCertificate=True");
        }
        public DbSet<Caravan> Caravans { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Color> Colors { get; set; }
        public DbSet<Rental> Rentals { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //1 KULLANICI Bİ
            modelBuilder.Entity<Rental>()
                .HasOne(t => t.User) //KULLANICI KAÇ TANE KİRALAMA YAPILIRSA YAPSIN KİRALAMAYA AYNI USERID ATADIK
                .WithMany() //BİR KULLANICI BİRDEN FAZLA KİRALAMA YAPABİLİR DEDİK
                .HasForeignKey(t => t.UserId) //KİRALAMA YAPTIKCA RENTAL TABLOSUNA DIŞARDAN BİR USERID ATICAZ YANİ HER KİRALAMANIN BİR USERID'sİ OLUCAK
                .IsRequired(); //USERID ALANININ ZORUNLU OLDUĞUNU BELİRTİR


            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
