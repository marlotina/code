using System;

namespace Patterns.Core.API.Application.Patterns.Observer.Implementations
{
    public class CreateSUperHumanObserver : IObserver
    {
        public void Notify(ISubject subject)
        {
            Console.WriteLine("CreateUser");
        }
    }
}
