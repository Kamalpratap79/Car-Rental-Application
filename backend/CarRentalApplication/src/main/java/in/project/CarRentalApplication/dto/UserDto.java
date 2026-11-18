package in.project.CarRentalApplication.dto;

import in.project.CarRentalApplication.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {

    private Long id;

    private String name;

    private String email;

    private UserRole userRole;
}
