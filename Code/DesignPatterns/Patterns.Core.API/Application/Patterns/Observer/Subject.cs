using System.Collections.Generic;

namespace Patterns.Core.API.Application.Patterns.Observer
{
    public class Subject : ISubject
    {
        private List<IObserver> observers = new List<IObserver>();

        public void AddObserver(IObserver observer)
        {
            if (observers != null) {
                this.observers.Add(observer);
            }
        }

        public void DeleteObserver(IObserver observer)
        {
            if (observers != null)
            {
                this.observers.Remove(observer);
            }
        }

        public void Notify()
        {
            foreach (var observer in this.observers) {
                observer.Notify(this);
            }
        }
    }
}
