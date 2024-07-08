using Microsoft.AspNetCore.Mvc;

namespace TDPhoneS.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
