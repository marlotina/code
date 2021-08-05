using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Patterns.Core.API.Application.Patterns.Events
{
    public class EventPublisher<T> : IEventPublisher<T>
                where T : IEvent
    {
        readonly List<IEventHandler<T>> eventHandlers;

        public EventPublisher(IEnumerable<IEventHandler<T>> eventHandlers)
        {
            if (eventHandlers != null)
            {
                this.eventHandlers = eventHandlers.ToList();
            }
            else
            {
                this.eventHandlers = new List<IEventHandler<T>>();
            }

        }

        public async Task PublishAsync(T iEvent)
        {
            var tasks = this.eventHandlers
                .Select(
                    async (eventHandler) => {
                        await eventHandler.HandleAsync(iEvent);
                    });
            await Task.WhenAll(tasks);
        }
    }
}
