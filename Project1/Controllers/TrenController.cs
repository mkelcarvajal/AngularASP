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
    public class TrenController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public TrenController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Tren
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tren>>> GetTren()
        {
            return await _context.Tren.ToListAsync();
        }

        // GET: api/Tren/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tren>> GetTren(int id)
        {
            var tren = await _context.Tren.FindAsync(id);

            if (tren == null)
            {
                return NotFound();
            }

            return tren;
        }

        // PUT: api/Tren/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTren(int id, Tren tren)
        {
            if (id != tren.id)
            {
                return BadRequest();
            }

            _context.Entry(tren).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrenExists(id))
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

        // POST: api/Tren
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tren>> PostTren(Tren tren)
        {
            _context.Tren.Add(tren);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTren", new { id = tren.id }, tren);
        }

        // DELETE: api/Tren/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tren>> DeleteTren(int id)
        {
            var tren = await _context.Tren.FindAsync(id);
            if (tren == null)
            {
                return NotFound();
            }

            _context.Tren.Remove(tren);
            await _context.SaveChangesAsync();

            return tren;
        }

        private bool TrenExists(int id)
        {
            return _context.Tren.Any(e => e.id == id);
        }
    }
}
