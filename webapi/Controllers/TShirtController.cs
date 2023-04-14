using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Drawing;
using System.Reflection;
using webapi.Data;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class TShirtController : Controller
    {
        public readonly TShirtAPIDbContext dbContext;

        public TShirtController(TShirtAPIDbContext context)
        {
            this.dbContext = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetTShirts()
        {
            return Ok(await dbContext.TShirts.ToListAsync());
        }

        [HttpPost]
        public async  Task<IActionResult> AddTShirt(AddTShirt tshirt)
        {
            var newTShirt = new TShirt()
            {
                id = Guid.NewGuid(),
                gender = tshirt.gender,
                style = tshirt.style,
                color = tshirt.color,
                made = tshirt.made,
                description = tshirt.description,
                priceInUSD = tshirt.priceInUSD,
                size = tshirt.size,
                previewUrl = tshirt.previewUrl,

            };
            await dbContext.TShirts.AddAsync(newTShirt);
            await dbContext.SaveChangesAsync();
            return Ok(newTShirt);
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateTShirt([FromRoute] Guid id, UpdateTShirtRequest updatedTShirt)
        {
            var tShirt = await dbContext.TShirts.FindAsync(id);
            if(tShirt != null)
            {
                tShirt.gender = updatedTShirt.gender;
                tShirt.style = updatedTShirt.style;
                tShirt.color = updatedTShirt.color;
                tShirt.made = updatedTShirt.made;
                tShirt.description = updatedTShirt.description;
                tShirt.priceInUSD = updatedTShirt.priceInUSD;
                tShirt.size = updatedTShirt.size;
                tShirt.previewUrl = updatedTShirt.previewUrl;

                await dbContext.SaveChangesAsync();

                return Ok(tShirt);
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteTShirt([FromRoute] Guid id)
        {
            var tShirt = await dbContext.TShirts.FindAsync(id);
            if (tShirt != null)
            {
                dbContext.Remove(tShirt);
                await dbContext.SaveChangesAsync();

                return Ok(true);
            }
            return NotFound();
        }
    }
}
