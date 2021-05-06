using Microsoft.Extensions.DependencyInjection;
using Proof.Dependency.Injection.Standar.Contract;
using Proof.Dependency.Injection.Standar.Implementation;

namespace Proof.Dependency.Injection.Standar.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static CustomServiceCollection AddProof(this IServiceCollection services, params IModule[] modules) 
        {
            var serviceCollection = new CustomServiceCollection(services);

            foreach (var module in modules) 
            {
                module.RegisterServices(serviceCollection);
            }

            return serviceCollection;
        }
    }
}
