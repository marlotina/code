namespace Patterns.Core.API.Application.Patterns.Observer
{
    public interface ISubject
    {
        void AddObserver(IObserver observer);

        void DeleteObserver(IObserver observer);

        void Notify();
    }
}
