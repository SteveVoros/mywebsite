using System.ComponentModel.DataAnnotations;

namespace mywebsite.Models
{
    public class ContactMessage : IContactMessage
    {
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        [Required]
        [StringLength(50)]
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}