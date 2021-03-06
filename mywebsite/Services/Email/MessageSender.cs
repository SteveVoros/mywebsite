using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using mywebsite.Models;
using mywebsite.Services.Azure;

namespace mywebsite.Services.Email
{
    public class MessageSender : IEmailSender
    {
        private string Name { get; set; }
        private string FromEmail { get; set; }
        private string Subject { get; set; }
        private string Message { get; set; }
        private EmailSettings _emailSettings { get; }
        private KeyVaultEmailSecrets _keyvault;
        public MessageSender(IOptions<EmailSettings> emailSettings, IOptions<KeyVaultEmailSecrets> keyVault)
        {
            _emailSettings = emailSettings.Value;
            _keyvault = keyVault.Value;
        }

        public Task SendMessageAsync(IContactMessage message)
        {
            this.Name = message.Name;
            this.FromEmail = message.Email;
            this.Subject = message.Subject;
            this.Message = message.Message;
            ExecuteMessageSend().Wait();
            return Task.FromResult(0);
        }

        private async Task ExecuteMessageSend()
        {
            try
            {
                MailMessage mail = new MailMessage()
                {
                    From = new MailAddress(_keyvault.Username)
                };
                mail.To.Add(new MailAddress(_keyvault.ToEmail));
                // mail.CC.Add(new MailAddress(this.FromEmail));

                mail.Subject = "From: " + this.Name + " Subject: " + this.Subject;
                mail.Body = this.Message + "<br>" + "Email: " + this.FromEmail;
                mail.IsBodyHtml = true;
                mail.Priority = MailPriority.Normal;

                using (SmtpClient smtp = new SmtpClient(_emailSettings.PrimaryDomain, _emailSettings.PrimaryPort))
                {
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(_keyvault.Username, _keyvault.Password);
                    smtp.EnableSsl = true;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    await smtp.SendMailAsync(mail);
                }
            }
            catch (Exception ex)
            {
                throw;
                // TODO: Set up logging
            }
        }
    }
}