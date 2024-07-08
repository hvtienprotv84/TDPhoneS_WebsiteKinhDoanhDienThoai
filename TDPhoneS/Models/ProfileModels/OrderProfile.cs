using AutoMapper;
using TDPhoneS.Models.DataModels;
using TDPhoneS.Models.ViewModels;

namespace TDPhoneS.Models.ProfileModels
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<CheckoutViewModel, Order>()
                .ReverseMap();
        }
    }
}
