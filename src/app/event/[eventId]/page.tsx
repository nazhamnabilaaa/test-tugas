export default function EventDetails({
  params,
}: {
  params: { eventId: string };
}) {
  return (
    <div className="text-2xl font-bold">Event Details ke-{params.eventId}</div>
  );
}
