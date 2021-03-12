using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Models
{
    public class Tren
    {
        [Key]
        public int id { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int numeroTren { get; set; }

        [Column(TypeName = "varchar(256)")]
        public string observacion { get; set; }

        [ForeignKey("operadorId")]
        public int operadorId { get; set; }
    }
}
