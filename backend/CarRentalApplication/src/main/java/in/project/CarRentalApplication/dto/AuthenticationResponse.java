package in.project.CarRentalApplication.dto;

import in.project.CarRentalApplication.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;

    private UserRole userRole;

    private Long userId;
}
