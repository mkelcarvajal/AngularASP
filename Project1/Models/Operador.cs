using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Operador
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string nombre { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string rut { get; set; }

        [Required]
        [Column(TypeName = "varchar(32)")]
        public string licencia { get; set; }

        [Required]
        [Column(TypeName = "bit")]
        public bool estado { get; set; }
    }
}
