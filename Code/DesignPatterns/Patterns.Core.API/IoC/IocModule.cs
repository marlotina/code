using Patterns.Core.API.Api.Mapper.Contract;
using Patterns.Core.API.Api.Mapper.Implementation;
using Patterns.Core.API.Application.Contract;
using Patterns.Core.API.Application.Implementation;
using Patterns.Core.API.Application.Patterns.Contract;
using Patterns.Core.API.Application.Patterns.Implementation;
using Patterns.Core.API.Application.Patterns.Observer;
using Patterns.Core.API.Configuration.Contract;
using Patterns.Core.API.Configuration.Implementation;
using Patterns.Core.API.Domain.Repository;
using Patterns.Core.API.Infrastrucutre.Repository;
using Proof.Dependency.Injection.Standar.Contract;

namespace Patterns.Core.API.IoC
{
    public class IocModule : IModule
    {
        public void RegisterServices(ICustomServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<ISuperHumanMapper, SuperHumanMapper>();
            serviceCollection.AddSingleton<IProofConfiguration, ProofConfiguration>();

            serviceCollection.AddTransient<IManageSuperHuman, ManageSuperHuman>();
            serviceCollection.AddTransient<ISuperHumanQueryServices, SuperHumanQueryServices>();

            serviceCollection.AddTransient<ISearchStrategy, SearchHerosStrategy>();
            serviceCollection.AddTransient<ISearchStrategy, SearchVilliansStrategy>();

            serviceCollection.AddTransient<IManageSuperHumanRepository, ManageSuperHumanDB>();
            serviceCollection.AddTransient<ISuperHumanQueryRepository, SuperHumanQueryDBRepository>();

            serviceCollection.AddSingleton<ISubject, Subject>();
        }
    }
}
