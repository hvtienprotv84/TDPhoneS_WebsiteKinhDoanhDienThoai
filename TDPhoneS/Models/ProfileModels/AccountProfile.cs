using AutoMapper;
using TDPhoneS.Models.DataModels;
using TDPhoneS.Models.ViewModels;

namespace TDPhoneS.Models.ProfileModels
{
    public class AccountProfile : Profile
    {
        public AccountProfile()
        {
            CreateMap<CreateAccountViewModels, User>()
                .ReverseMap();
            CreateMap<UpdateAccountViewModels, User>()
                .ReverseMap();
            CreateMap<RegisterViewModel, User>()
                .ReverseMap();

            //CreateMap<Account, CreateAccountViewModels>();
        }
    }
}
