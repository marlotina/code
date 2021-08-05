namespace Patterns.Core.API.Application.Patterns.Observer
{
    public interface IObserver
    {
        void Notify(ISubject subject);
    }
}
