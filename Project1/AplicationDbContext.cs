using Microsoft.EntityFrameworkCore;
using Project1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {}
        public DbSet<Operador> Operador { get; set; }
        public DbSet<Tren> Tren { get; set; }
    }
}
