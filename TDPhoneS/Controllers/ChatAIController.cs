using AspNetCoreHero.ToastNotification.Abstractions;
using TDPhoneS.Data;
using TDPhoneS.Models.DataModels;
using Microsoft.AspNetCore.Mvc;

namespace TDPhoneS.Controllers
{
    public class ChatAIController : Controller
    {

        public ChatAIController()
        {
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Index2()
        {
            return View();
        }
    }
}
