using AutoMapper;
using TDPhoneS.Models.DataModels;
using TDPhoneS.Models.ViewModels;

namespace TDPhoneS.Models.ProfileModels
{
    public class OrderDetailsProfile : Profile
    {
        public OrderDetailsProfile()
        {
            CreateMap<OrderDetailsViewModel, OrderDetail>()
                .ReverseMap();
        }
    }
}
