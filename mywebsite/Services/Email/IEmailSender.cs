using System.Threading.Tasks;
using mywebsite.Models;

namespace mywebsite.Services.Email
{
    public interface IEmailSender
    {
        Task SendMessageAsync(IContactMessage message);
    }
}