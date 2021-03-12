using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperadorController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public OperadorController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Operador
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Operador>>> GetOperador()
        {
            return await _context.Operador.ToListAsync();
        }

        // GET: api/Operador/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Operador>> GetOperador(int id)
        {
            var operador = await _context.Operador.FindAsync(id);

            if (operador == null)
            {
                return NotFound();
            }

            return operador;
        }

        // PUT: api/Operador/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOperador(int id, Operador operador)
        {
            if (id != operador.id)
            {
                return BadRequest();
            }

            _context.Entry(operador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OperadorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Operador
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Operador>> PostOperador(Operador operador)
        {
            _context.Operador.Add(operador);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOperador", new { id = operador.id }, operador);
        }

        // DELETE: api/Operador/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Operador>> DeleteOperador(int id)
        {
            var operador = await _context.Operador.FindAsync(id);
            if (operador == null)
            {
                return NotFound();
            }

            _context.Operador.Remove(operador);
            await _context.SaveChangesAsync();

            return operador;
        }

        private bool OperadorExists(int id)
        {
            return _context.Operador.Any(e => e.id == id);
        }
    }
}
