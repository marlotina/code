using Microsoft.Extensions.DependencyInjection;
using Proof.Dependency.Injection.Standar.Contract;

namespace Proof.Dependency.Injection.Standar.Implementation
{
    public class CustomServiceCollection : ICustomServiceCollection
    {
        private readonly IServiceCollection servicecollection;

        public CustomServiceCollection(IServiceCollection servicecollection)
        {
            this.servicecollection = servicecollection;
        }

        void ICustomServiceCollection.AddSingleton<TContract, TImplemntation>()
        {
            this.servicecollection.AddSingleton<TContract, TImplemntation>();
        }

        void ICustomServiceCollection.AddTransient<TContract, TImplemntation>()
        {
            this.servicecollection.AddTransient<TContract, TImplemntation>();
        }
    }
}
