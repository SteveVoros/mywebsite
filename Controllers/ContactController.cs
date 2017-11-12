using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mywebsite.Models;
using mywebsite.Services.Email;

namespace mywebsite.Controllers
{
    public class ContactController : Controller
    {
        private readonly IEmailSender _emailSender;

        public ContactController(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }
        [HttpPost("api/sendmessage")]
        public async Task<IActionResult> SendMessage([FromBody] ContactMessage message) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            await _emailSender.SendMessageAsync(message);
            return Ok(message);
        }
    }
}