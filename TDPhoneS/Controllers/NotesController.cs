using Microsoft.AspNetCore.Mvc;

namespace TDPhoneS.Controllers
{
    public class NotesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
