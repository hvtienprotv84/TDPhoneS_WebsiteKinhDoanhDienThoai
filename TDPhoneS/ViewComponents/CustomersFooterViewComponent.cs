using TDPhoneS.Data;
using Microsoft.AspNetCore.Mvc;

namespace TDPhoneS.ViewComponents
{
    public class CustomersFooterViewComponent : ViewComponent
    {
        private readonly ApplicationDbContext _context;
        public CustomersFooterViewComponent(ApplicationDbContext context)
        {
            _context = context;
        }
        public IViewComponentResult Invoke()
        {
            var categories = _context.Categories.Where(x => x.Status == 1).ToList();
            return View(categories);
        }
    }
}
