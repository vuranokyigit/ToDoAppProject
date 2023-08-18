package TechCareerFYV.audit;


import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();//login or not
        if (authentication!=null && authentication.isAuthenticated()){
            System.out.println(authentication.getName());
            System.out.println(authentication.getPrincipal());
            return Optional.of(authentication.getName());
        }
        return Optional.of("vuranok");
    }
}
