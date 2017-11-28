using System;

namespace mywebsite.Services.Email
{
    public class EmailSettings
    {
        public String PrimaryDomain { get; set; }

        public int PrimaryPort { get; set; }

        public String SecondaryDomain { get; set; }

        public int SecondaryPort { get; set; }
    }
}