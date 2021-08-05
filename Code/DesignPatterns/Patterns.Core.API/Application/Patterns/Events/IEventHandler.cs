using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Events
{
    public interface IEventHandler<T> where T : IEvent
    {
        Task HandleAsync(T iEvent);
    }
}
