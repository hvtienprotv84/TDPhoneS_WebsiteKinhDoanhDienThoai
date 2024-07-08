using System.ComponentModel.DataAnnotations;

namespace TDPhoneS.Models.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        [MinLength(5, ErrorMessage = "Min length 5 characters")]
        public string Username { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
