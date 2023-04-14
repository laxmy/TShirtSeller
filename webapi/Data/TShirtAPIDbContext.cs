using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Data
{
    public class TShirtAPIDbContext : DbContext
    {
        public TShirtAPIDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TShirt> TShirts { get; set; }
    }
}
