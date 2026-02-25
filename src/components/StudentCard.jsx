import Button from "./Button";
import Badge from "./Badge";

export default function StudentCard({ student, onDelete, onToggle, onEdit, viewMode }) {
  return (
    <div className={`card ${viewMode === "list" ? "list-card" : ""}`}>
      <div className="card-info">
        <h3>{student.name}</h3>
        <p>Course: {student.course}</p>
        <p>Grade: {student.grade}</p>

        <div className="badges">
          <Badge type={student.isPresent ? "success" : "danger"}>
            {student.isPresent ? "Active" : "Inactive"}
          </Badge>

          {student.grade >= 90 && <Badge type="warning">Top Performer</Badge>}
        </div>
      </div>

      <div className="actions">
        <Button onClick={() => onToggle(student.id)}>
          {student.isPresent ? "Mark Inactive" : "Mark Active"}
        </Button>

        <Button variant="outline" onClick={() => onEdit(student)}>
          Edit
        </Button>

        <Button variant="danger" onClick={() => onDelete(student.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}