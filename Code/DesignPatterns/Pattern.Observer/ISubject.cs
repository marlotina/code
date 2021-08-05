namespace Pattern.Observer
{
    public interface ISubject
    {
        void Attach(IObserver observer);

        void Detach(IObserver observer);2

        void Notify();
    }
}
