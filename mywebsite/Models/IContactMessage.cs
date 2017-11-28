namespace mywebsite.Models
{
    public interface IContactMessage
    {
        string Name { get; set; }
        string Email { get; set; }
        string Subject { get; set; }
        string Message { get; set; }
    }
}