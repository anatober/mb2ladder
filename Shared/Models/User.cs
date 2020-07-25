using System;

namespace Shared.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public Guid PlayerId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool ConfirmedEmail { get; set; }
        public DateTime RegisterDate { get; set; }
        
        
        public string Nick { get; set; }
        public string Region { get; set; }
        public string ClanName { get; set; }
        public string Discord { get; set; }
    }
}