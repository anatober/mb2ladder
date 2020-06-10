using Microsoft.EntityFrameworkCore;
using MBIILadder.WebApp.Models;

namespace MBIILadder.WebApp.Contexts
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public UserContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
             => optionsBuilder.UseNpgsql("Host=localhost;Database=postgres;Username=postgres;Password=my_password");
    }
}