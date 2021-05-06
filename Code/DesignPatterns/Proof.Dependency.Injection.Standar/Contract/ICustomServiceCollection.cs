namespace Proof.Dependency.Injection.Standar.Contract
{
    public interface ICustomServiceCollection
    {
        void AddSingleton<TContract, TImplemntation>()
            where TContract : class
            where TImplemntation : class, TContract;

        void AddTransient<TContract, TImplemntation>()
            where TContract : class
            where TImplemntation : class, TContract;
    }
}
