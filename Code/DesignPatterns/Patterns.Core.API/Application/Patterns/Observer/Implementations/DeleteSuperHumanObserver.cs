using System;

namespace Patterns.Core.API.Application.Patterns.Observer.Implementations
{
    public class DeleteSuperHumanObserver : IObserver
    {
        public void Notify(ISubject subject)
        {
            Console.WriteLine("Delete user");
        }
    }
}
