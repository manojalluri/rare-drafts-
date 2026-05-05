import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Booking {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  endTime?: string;
  address: string;
  notes?: string;
  package: string;
  vertical: string;
  status: string;
}

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin Panel · Flashshot" }],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("flashshot_bookings") || "[]");
    data.sort(
      (a: Booking, b: Booking) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    setBookings(data);
  }, []);

  const clearBookings = () => {
    if (confirm("Are you sure you want to clear all bookings?")) {
      localStorage.removeItem("flashshot_bookings");
      setBookings([]);
    }
  };

  const updateStatus = (id: string, newStatus: string) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status: newStatus } : b));
    setBookings(updated);
    localStorage.setItem("flashshot_bookings", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-4xl font-semibold">Admin Panel</h1>
          <button onClick={clearBookings} className="text-sm text-red-500 hover:underline">
            Clear all bookings
          </button>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="p-4 font-medium text-muted-foreground">Date</th>
                    <th className="p-4 font-medium text-muted-foreground">Customer</th>
                    <th className="p-4 font-medium text-muted-foreground">Event</th>
                    <th className="p-4 font-medium text-muted-foreground">Package</th>
                    <th className="p-4 font-medium text-muted-foreground">Status</th>
                    <th className="p-4 font-medium text-muted-foreground text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-12 text-center text-muted-foreground">
                        No bookings yet. Submissions will appear here.
                      </td>
                    </tr>
                  ) : (
                    bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-surface/50 transition-colors">
                        <td className="p-4 align-top">
                          <div className="font-medium">
                            {format(new Date(b.createdAt), "MMM d, yyyy")}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {format(new Date(b.createdAt), "h:mm a")}
                          </div>
                        </td>
                        <td className="p-4 align-top">
                          <div className="font-medium">{b.name}</div>
                          <div className="text-xs text-muted-foreground">{b.phone}</div>
                          <div className="text-xs text-muted-foreground">{b.email}</div>
                        </td>
                        <td className="p-4 align-top">
                          <div className="font-medium capitalize">{b.vertical}</div>
                          <div className="text-xs text-muted-foreground">
                            {b.date} at {b.time}
                          </div>
                          <div
                            className="text-xs text-muted-foreground mt-1 max-w-[200px] truncate"
                            title={b.address}
                          >
                            {b.address}
                          </div>
                          {b.notes && (
                            <div
                              className="text-xs text-muted-foreground mt-1 bg-surface p-2 rounded max-w-[200px] truncate"
                              title={b.notes}
                            >
                              {b.notes}
                            </div>
                          )}
                        </td>
                        <td className="p-4 align-top">
                          <div className="font-medium">{b.package}</div>
                        </td>
                        <td className="p-4 align-top">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              b.status === "Pending"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : b.status === "Confirmed"
                                  ? "bg-green-500/10 text-green-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="p-4 align-top text-right">
                          <select
                            className="bg-surface border border-border rounded text-xs p-1"
                            value={b.status}
                            onChange={(e) => updateStatus(b.id, e.target.value)}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
}
