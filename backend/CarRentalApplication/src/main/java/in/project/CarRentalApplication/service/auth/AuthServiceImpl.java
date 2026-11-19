package in.project.CarRentalApplication.service.auth;

import in.project.CarRentalApplication.dto.SignupRequest;
import in.project.CarRentalApplication.dto.UserDto;
import in.project.CarRentalApplication.entity.User;
import in.project.CarRentalApplication.enums.UserRole;
import in.project.CarRentalApplication.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    @Override
    public UserDto createCustomer(SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setUserRole(UserRole.CUSTOMER);

        User createdUser = userRepository.save(user);
        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());
        return userDto;

    }

    @Override
    public boolean hasCustomerWithEmail(String email) {

        return userRepository.findFirstByEmail(email).isPresent();

    }
}
